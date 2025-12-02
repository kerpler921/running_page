interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Kerpler跑步生涯',
  siteUrl: '',
  logo: 'https://yt3.googleusercontent.com/HbQtfqgKK6Pg6P4OQTyOoG5_qB2KnEMn4qRCdsAWURPKpK2ZrDsxiRUCRduZ7wrpfpDTwq5Z0w=s176-c-k-c0x00ffffff-no-rj-mo',
  description: '个人网站和博客',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: '',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
