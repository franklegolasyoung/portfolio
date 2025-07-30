import React from 'react';
import Giscus from '@giscus/react';

function GiscusBoard({ theme }: { theme: string }) {
  return (
    <div id="giscus-board" className="items-container">
      <h1>Message Board</h1>
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
      />
    </div>
  );
}

export default GiscusBoard;