import { graphql, useStaticQuery } from 'gatsby';
import { Paper } from '../../components/Paper';

interface PapersSectionQueryResult {
    allFile: {
        paperFiles: {
            name: string;
            relativePath: string;
            section: {
                button: {
                    label: string;
                    url: string;
                    visible: boolean;
                };
                papers: Paper[];
            }[];
        }[];
    };
}

export const useLocalDataSource = (): PapersSectionQueryResult => {
    return useStaticQuery(graphql`
        query PapersByFilename {
            allFile(filter: { childPapersJson: { id: { ne: null } } }) {
                paperFiles: nodes {
                    name
                    relativePath
                    section: children {
                        ... on PapersJson {
                            button {
                                label
                                url
                                visible
                            }
                            papers {
                                category
                                description
                                image {
                                    alt
                                    linkTo
                                    src {
                                        childImageSharp {
                                            gatsbyImageData(width: 400)
                                        }
                                    }
                                }
                                links {
                                    type
                                    url
                                }
                                tags
                                title
                                visible
                            }
                        }
                    }
                }
            }
        }
    `);
};
