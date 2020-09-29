import { useContext } from 'react';

import { LanguageContext } from '../context/language';
import ExternalLinkIcon from '../public/images/external-link-alt-solid.svg';

const ProjectBox = ({ icon, title, desc, url }) => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center justify-center text-center border border-gray-300 p-6 rounded-lg bg-white shadow-xl">
      <div className="rounded-lg overflow-hidden">
        <picture>
          <source srcSet={`${icon}.webp`} type="image/webp" />
          <img src={`${icon}.jp2`} alt={`${title} Thumb`} />
        </picture>
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {title}
      </h2>
      <p className="text-base mt-2">{desc}</p>
      {url && (
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="text-corporative-blue inline-flex items-center mt-3 cursor-pointer"
        >
          {getTranslation('[View Demo]')}
          <ExternalLinkIcon className="ml-2 h-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectBox;
