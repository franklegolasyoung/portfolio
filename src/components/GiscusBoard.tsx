import React from 'react';
import Giscus from '@giscus/react';

function GiscusBoard({ theme }: { theme: string }) {
  return (
    <div id="giscus-board" className="items-container">
      <h2>Message Board</h2>
      <Giscus
        repo="franklegolasyoung/portfolio"
        repoId="R_kgDOPVHv-Q"
        category="Announcements"
        categoryId="DIC_kwDOPVHv-c4Ctk9o"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default GiscusBoard;