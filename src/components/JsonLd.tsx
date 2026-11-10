/**
 * Renders structured data as a JSON-LD script tag.
 * "<" is escaped so content can never close the script element (XSS-safe),
 * as recommended in the Next.js JSON-LD guide.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
