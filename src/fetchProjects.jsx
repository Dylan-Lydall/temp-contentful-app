import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "5zv9ck3932op",
  environment: "master",
  accessToken: "4f6zIBg6FnzEjye2_HQBuyeKs3mQ35_hYfBIU6SYmcs",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "projects",
      });
      const projects = items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return {
          title,
          url,
          img,
          id,
        };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
