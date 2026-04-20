import { usePDF } from "react-to-pdf";

function HtmlPdf() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef}>
        <br />
        <br />
        <br />
        <br />
        <br />
        bruno da silva pedroso
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quibusdam
        ab veritatis itaque voluptate aliquam saepe explicabo doloribus,
        voluptas cum? Harum quidem aut voluptate et incidunt laudantium
        obcaecati ipsum cum.
      </div>
    </div>
  );
}

export { HtmlPdf };
