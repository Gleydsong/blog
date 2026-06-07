import allPosts from "contentlayer/generated";

export default function BlogPage() {
  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container spac-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 px-4 md:px-0 ">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-certer md:text-left py-2 px-4 bg-cyan-300">
              Blog
            </span>
            {/* Title */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Dicas e Estratégias para impulsionar o seu negócio
            </h1>
          </div>
        </div>
      </header>
      {/*SEARCH BAR*/}
      {/* POSTS */}
    </div>
  );
}
