import { NextResponse } from 'next/server';
import { products } from 'data/products';

export async function GET(): Promise<NextResponse> {
  const productsFromServer = products;

  return NextResponse.json(productsFromServer);
}
