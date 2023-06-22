import { NextRequest, NextResponse } from 'next/server';
import { products } from 'data/products';

export async function GET(req: NextRequest, res: NextResponse) {
  const productsFromServer = products;

  return NextResponse.json(productsFromServer);
}
