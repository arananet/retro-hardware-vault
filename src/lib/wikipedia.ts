export async function getWikiSummary(term: string) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`
    );
    const data = await res.json();
    return data.extract || "Data corrupted. Archives incomplete.";
  } catch (error) {
    return "Connection to archives failed.";
  }
}
