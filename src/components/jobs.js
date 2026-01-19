import React, { useState } from 'react';
import styled from 'styled-components';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  background-color: transparent;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.teal : theme.colors.slate)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.teal};
  }

  @media (max-width: 600px) {
    justify-content: center;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightestNavy};
    min-width: 120px;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  background: ${({ theme }) => theme.colors.teal};
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0 0 30px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    padding-left: 0;
  }

  h3 {
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${({ theme }) => theme.colors.teal};
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.lightSlate};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 13px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 18px;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.teal};
      }
    }
  }
`;

const Jobs = () => {
    const [activeTabId, setActiveTabId] = useState(0);

    const jobsData = [
        {
            title: 'Software Engineer in Test',
            company: 'Smart Techlodge',
            range: 'September 2025 - Present',
            url: 'https://smarttechlodge.com/',
            duties: [
                'Leading automated testing initiatives and quality assurance workflows.',
                'Ensuring every feature delivers the best possible user experience.',
                'Developing robust test scripts and integrating them into the build pipeline.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'AWAYR',
            range: 'February 2025 - May 2025',
            duties: [
                'Collaborated with development teams to create responsive UIs using React.js and Vue.js.',
                'Integrated APIs for seamless data exchange and enhanced application functionality.',
                'Performed code reviews and implemented clean code best practices.',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'IT Extension',
            range: 'August 2024 - January 2025',
            duties: [
                'Leveraged React hooks and state management for interactive web apps.',
                'Optimized frontend performance and ensured cross-browser compatibility.',
                'Delivered robust applications by analyzing complex requirements.',
            ],
        },
        {
            title: 'Trainee Developer',
            company: 'IT Centre RYK',
            range: 'November 2022 - February 2023',
            duties: [
                'Gained hands-on experience in Laravel and Frontend development.',
                'Worked on real-world projects during an intensive training period.',
            ],
        },
        {
            title: 'Wordpress Developer',
            company: 'WebBuggs',
            range: 'Sept 2020 - Feb 2021',
            duties: [
                'Designed and managed website frontends from scratch.',
                'Converted visual designs (PSD/Figma) into working WordPress sites.',
                'Maintained CSS consistency across all platforms and browsers.'
            ]
        }
    ];

    return (
        <StyledJobsSection id="jobs">
            <h2 className="section-title"><span>02.</span> Where I've Worked</h2>

            <div className="inner">
                <StyledTabList role="tablist" aria-label="Job tabs">
                    {jobsData.map((job, i) => (
                        <StyledTabButton
                            key={i}
                            isActive={activeTabId === i}
                            onClick={() => setActiveTabId(i)}
                            id={`tab-${i}`}
                            role="tab"
                            aria-selected={activeTabId === i}
                            aria-controls={`panel-${i}`}
                            tabIndex={activeTabId === i ? '0' : '-1'}>
                            <span>{job.company}</span>
                        </StyledTabButton>
                    ))}
                    <StyledHighlight activeTabId={activeTabId} />
                </StyledTabList>

                <StyledTabContent>
                    {jobsData.map((job, i) => (
                        <div
                            key={i}
                            id={`panel-${i}`}
                            role="tabpanel"
                            tabIndex="0"
                            aria-labelledby={`tab-${i}`}
                            aria-hidden={activeTabId !== i}
                            hidden={activeTabId !== i}>
                            <h3>
                                <span>{job.title}</span>
                                <span className="company">
                                    &nbsp;@&nbsp;
                                    {job.url ? (
                                        <a href={job.url} className="inline-link" target="_blank" rel="noreferrer">
                                            {job.company}
                                        </a>
                                    ) : (
                                        <span>{job.company}</span>
                                    )}
                                </span>
                            </h3>

                            <p className="range">{job.range}</p>

                            <ul>
                                {job.duties.map((duty, i) => (
                                    <li key={i}>{duty}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </StyledTabContent>
            </div>
        </StyledJobsSection>
    );
};

export default Jobs;
