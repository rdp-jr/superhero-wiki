
import ImageLoader from "react-loading-image";
import Link from "next/link";
import _ from "lodash";

const CharacterCard = ({ data }) => {
  const name = data.name;
  const fullName = data.biography.fullName;
  const publisher = data.biography.publisher;
  let ReactFitText = require("react-fittext");

  return (
    <>
      <Link href="/characters/[slug]" as={`/characters/${data.slug}`}>
        <div className="characterCard hvr-sweep-to-top d-flex flex-column align-items-start">
          <div className="characterImageContainer">
           

            <ImageLoader
              src={data.images.sm}
              alt={data.name}
              className="characterImage"
              loading={() => (
                <div className="lds-dual-ring d-flex justify-content-center align-items-center h-100 mx-auto"></div>
              )}
              error={() => (
                <div className="d-flex justify-content-center align-items-center h-100">
                  Error
                </div>
              )}
            />
          </div>

          <ReactFitText minFontSize={17} maxFontSize={20}>
              <p className="pl-2 name animated fadeIn">{_.upperCase(name)}</p>
            </ReactFitText>

            <ReactFitText minFontSize={13} maxFontSize={13}>
              <p className="pl-2 full-name animated fadeIn">
                {name === fullName ? "" : fullName}
              </p>
            </ReactFitText>
            <ReactFitText minFontSize={12} maxFontSize={13}>
              <p className="pl-2 animated fadeIn mt-auto publisher">
                {publisher ? _.upperCase(publisher) : ""}
              </p>
            </ReactFitText>
 
        </div>
      </Link>
    </>
  );
};

export default CharacterCard;
