import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { Slider } from '../../components/Slider';
import { Button, ButtonType } from '../../components/Button';
import { Paper } from '../../components/Paper';
import { PageSection } from '../../types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function PapersSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const allFiles = response.allFile.paperFiles;
    const fileNameNeedle = props.fileName ? props.fileName : 'Papers';
    const result = allFiles.find((file) => {
        return file.name == fileNameNeedle;
    });
    const section = result ? result.section[0] : allFiles[0].section[0];

    return (
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Papers]}>
                    {section.papers.map((paper, key) => {
                        return paper.visible ? <Paper key={key} index={key} data={paper} /> : null;
                    })}
                </Slider>
                {section.button !== undefined && section.button.visible !== false && (
                    <Animation className={classes.MorePapers} type="fadeIn">
                        <Button
                            type={ButtonType.LINK}
                            externalLink={true}
                            url={section.button.url}
                            label={section.button.label}
                        />
                    </Animation>
                )}
            </Section>
        </Animation>
    );
}
