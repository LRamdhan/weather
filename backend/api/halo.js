export default async function handler(request) {
  // Mengambil parameter query (?name=...) jika ada
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Dunia';

  // Mengembalikan respons dalam bentuk JSON
  return new Response(
    JSON.stringify({ pesan: `Halo, ${name}!` }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
