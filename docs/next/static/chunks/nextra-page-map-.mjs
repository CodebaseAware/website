import docs_meta from "../../../pages/docs/_meta.ts";
export const pageMap = [{
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "how-it-works",
    route: "/docs/how-it-works",
    frontMatter: {
      "title": "How does it work?"
    }
  }, {
    name: "index",
    route: "/docs",
    frontMatter: {
      "title": "Introduction"
    }
  }, {
    name: "release",
    route: "/docs/release",
    frontMatter: {
      "title": "When will it be released?"
    }
  }]
}];