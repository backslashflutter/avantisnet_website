import React from "react";
import { client } from "../../Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
class PortfolioNew extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: "projects",
        order: "sys.createdAt",
      })
      .then((response) => {
        this.setState({
          projects: response.items,
        });
      });
  }

  render() {
    return (
      <>
        <section className="bg-gray-100 py-12">
          <div className="my-4 py-4 sm:m-10">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
              Our Projects 👋
            </h2>
            <div className="flex justify-center">
              <div className="border-2 border-blue-900 w-36"></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-base md:text-xl lg:text-2xl font-semibold text-blue-900">
              Here is the list of some of our amazing projects that you will
              definitety love to see.
            </h2>
          </div>

          <section
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 lg:mx-20 z-10 sm:grid-cols-1 sm:mx-6 p-14 md:grid-cols-2 md:p-0"
            id="projects"
          >
            {this.state.projects.map(
              (e, index) => (
                console.log(e),
                (
                  <div className="card" key={index}>
                    <img
                      src={e.fields.projectFeaturedImage.fields.file.url}
                      alt={e.fields.projectTitle}
                      className="w-full object-cover"
                    />
                    <div className="p-7 text-center">
                      <div className="flex justify-start">
                        {e.fields.tags?.map((o, i) => (
                          <span className="tag">{o}</span>
                        ))}
                      </div>
                      <h3 className="font-semibold text-xl text-left mb-4 block">
                        {e.fields.projectTitle}
                      </h3>
                      <p className="text-left text-base font-normal leading-relaxed mb-7 line-clamp-3">
                        {documentToReactComponents(e.fields.projectDescription)}
                      </p>
                      <div className="flex flex-col justify-around">
                        <a
                          className="badge-2"
                          href={e.fields.demoUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </section>
        </section>
      </>
    );
  }
}

export default PortfolioNew;
