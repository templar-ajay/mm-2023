import { Helmet } from "react-helmet";
import { SessionEstrategicaStyles } from "./SessionEstrategicaStyles";
import SectionWrapper from "../layout/SectionWrapper";

export default function SessionEstrategica(data) {
  console.log("session component data", data);
  return (
    <div>
      <SectionWrapper pb={150} pbs={105}>
        <SessionEstrategicaStyles>
          <div className="container container__tight">
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/zz0n1CnJ3qifljz6v19G"
              // style="border:none;width:100%;"
              scrolling="no"
              id="zz0n1CnJ3qifljz6v19G"
              title="Muhammad - This is the One to Modify"
            ></iframe>
            <Helmet>
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </Helmet>
          </div>
        </SessionEstrategicaStyles>
      </SectionWrapper>
    </div>
  );
}
