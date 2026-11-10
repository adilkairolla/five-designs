import { chapterRows, numberedChapterCount } from "./jacket-sample";

export function ChapterRun() {
  return (
    <>
      <h3 className="jacket-blockhead">How the chapters run</h3>
      <p className="jacket-deck mt-2 text-pretty">
        An introduction and {numberedChapterCount} chapters. Each number is the page the chapter opens on.
      </p>
      <table className="jacket-chapters">
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Chapter</span>
            </th>
            <th scope="col">
              <span className="sr-only">Title</span>
            </th>
            <th scope="col">
              <span className="sr-only">Opens on page</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {chapterRows.map((row) => (
            <tr key={row.opensOn}>
              <td className="jacket-chapters-numeral">{row.numeral}</td>
              <th scope="row" className="jacket-chapters-title">
                {row.title}
              </th>
              <td className="jacket-chapters-page">{row.opensOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
