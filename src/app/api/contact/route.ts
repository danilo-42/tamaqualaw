import { NextResponse } from 'next/server';

// Basic in-memory rate limiting (resets on server restart)
const submissions = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS = 3;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = submissions.get(ip);

    if (!record || now > record.resetAt) {
        submissions.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= MAX_SUBMISSIONS) {
        return true;
    }

    record.count++;
    return false;
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { message: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        const data = await request.json();
        const { name, email, phone, message, website } = data;

        // Honeypot check - bots fill in hidden fields
        if (website) {
            // Silently reject but return success to not tip off bots
            return NextResponse.json(
                { message: 'Message sent successfully' },
                { status: 200 }
            );
        }

        // Server-side validation
        if (!name || name.trim().length < 2) {
            return NextResponse.json(
                { message: 'Please provide your name.' },
                { status: 400 }
            );
        }

        if (!email || !isValidEmail(email)) {
            return NextResponse.json(
                { message: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        if (!message || message.trim().length < 10) {
            return NextResponse.json(
                { message: 'Please provide more detail about your legal needs (at least 10 characters).' },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { message: 'Message is too long. Please keep it under 5000 characters.' },
                { status: 400 }
            );
        }

        // Log submission (placeholder for email delivery)
        console.log('Contact form submission:', {
            name: name.trim(),
            email: email.trim(),
            phone: phone?.trim() || 'Not provided',
            message: message.trim(),
            timestamp: new Date().toISOString(),
        });

        // TODO: Integrate email delivery service (Resend, SendGrid, etc.)
        // Example with Resend:
        // await resend.emails.send({
        //     from: 'noreply@holmanpittslaw.com',
        //     to: 'office@holmanpitts.com',
        //     subject: `New Contact Form: ${name.trim()}`,
        //     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
        // });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { message: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
