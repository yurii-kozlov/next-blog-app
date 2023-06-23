/* eslint-disable no-console */
import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export async function POST(req: NextRequest): Promise<Response | NextResponse> {
  const headersList = headers();

  if (req.method === 'POST') {
    let event;

    try {
      // 1.Retrieve the event by verifying signature using the raw body and secret
        const signature = headersList.get('stripe-signature');

        event = stripe.webhooks.constructEvent(
          req.body!.toString(),
          signature!,
          process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error) {
      return NextResponse.json(
        { error: 'Webhook error' },
        { status: 400 }
      )
    }

    // Successfully constructed event
    console.log('Success:', event.id);

    // 2. Handle event type (add business logic here)

    if (event.type === 'checkout.session.completed') {
      console.log('Payment received!')
    } else {
      console.warn('Unhandled event type:', event.type);
    }

    return NextResponse.json({ received: true })
  }

    return new Response('Method not allowed', {
      status: 405,
      headers: {
        'Allow': 'POST'
      }
    })
}
