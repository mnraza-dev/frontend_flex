import React from 'react';

const Card = () => {
  return (
    <div className=" bg-customCardBg p-6 xl:p-8 pb-4 xl:pb-6 bg-card dark:bg-card-dark rounded-2xl shadow-inner-border dark:shadow-inner-border-dark text-base text-secondary dark:text-secondary-dark my-8">
      <h3 className="mdx-heading text-primary dark:text-primary-dark mt-0 mb-3 leading-tight text-2xl font-display leading-9 text-primary dark:text-primary-dark font-bold my-6">
        You will learn
      </h3>
      <ul className="ms-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          <a
            className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
            href="/learn/typescript#typescript-with-react-components"
          >
            TypeScript with React Components
          </a>
        </li>
        <li className="leading-relaxed mb-1">
          <a
            className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
            href="/learn/typescript#example-hooks"
          >
            Examples of typing with Hooks
          </a>
        </li>
        <li className="leading-relaxed mb-1">
          <a
            className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
            href="/learn/typescript#useful-types"
          >
            Common types from <code className="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">@types/react</code>
          </a>
        </li>
        <li className="leading-relaxed mb-1">
          <a
            className="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
            href="/learn/typescript#further-learning"
          >
            Further learning locations
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Card;
