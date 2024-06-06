import { graphql, useStaticQuery } from 'gatsby';
import { Lecture } from '../../components/Lecture';

interface LecturesSectionQueryResult {
    allFile: {
        lectureFiles: {
            name: string;
            relativePath: string;
            section: {
                button: {
                    label: string;
                    url: string;
                    visible: boolean;
                };
                lectures: Lecture[];
            }[];
        }[];
    };
}

export const useLocalDataSource = (): LecturesSectionQueryResult => {
    return useStaticQuery(graphql`
        query LecturesByFilename {
            allFile(filter: { childLecturesJson: { id: { ne: null } } }) {
                lectureFiles: nodes {
                    name
                    relativePath
                    section: children {
                        ... on LecturesJson {
                            button {
                                label
                                url
                                visible
                            }
                            lectures {
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
