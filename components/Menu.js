import { useRouter } from 'next/router';
import { useContext } from 'react';

import { LangContext } from '../i18n-nimbel';

export const onClick = (router, section) => {
  const pageSection = document.getElementById(section);
  if (pageSection) {
    pageSection.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    router.push(`/#${section}`);
  }
};

export default function Menu({ desktop }) {
  const { t } = useContext(LangContext);
  const router = useRouter();

  return (
    <div
      className={`grid ${
        desktop ? 'grid-flow-col mr-5' : 'grid-cols-1 gap-1 text-3xl'
      }`}
    >
      <button
        type="button"
        className="cursor-pointer pr-3 pl-3"
        onClick={() => onClick(router, 'main')}
      >
        {t('[Home]')}
      </button>
      <button
        type="button"
        className="cursor-pointer pr-3 pl-3"
        onClick={() => onClick(router, 'services')}
      >
        {t('[Services]')}
      </button>
      <button
        type="button"
        className="cursor-pointer pr-3 pl-3"
        onClick={() => onClick(router, 'projects')}
      >
        {t('[Projects]')}
      </button>
      <button
        type="button"
        className="cursor-pointer pr-3 pl-3"
        onClick={() => onClick(router, 'contact')}
      >
        {t('[Contact]')}
      </button>
    </div>
  );
}
