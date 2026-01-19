import React from 'react';
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
  .project-item {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    &:nth-of-type(odd) {
      .project-content {
        grid-column: 7 / -1;
        text-align: right;

        @media (max-width: 1080px) {
          grid-column: 5 / -1;
        }
        @media (max-width: 768px) {
          grid-column: 1 / -1;
          padding: 40px 40px 30px;
          text-align: left;
        }
        @media (max-width: 480px) {
          padding: 25px 25px 20px;
        }
      }
      .project-tech-list {
        justify-content: flex-end;

        @media (max-width: 768px) {
          justify-content: flex-start;
        }

        li {
          margin: 0 0 5px 20px;

          @media (max-width: 768px) {
            margin: 0 10px 5px 0;
          }
        }
      }
      .project-links {
        justify-content: flex-end;
        margin-left: 0;
        margin-right: -10px;

        @media (max-width: 768px) {
          justify-content: flex-start;
          margin-left: -10px;
          margin-right: 0;
        }
      }
      .project-image {
        grid-column: 1 / 8;

        @media (max-width: 768px) {
          grid-column: 1 / -1;
        }
      }
    }

    .project-content {
      position: relative;
      grid-column: 1 / 7;
      grid-row: 1 / -1;

      @media (max-width: 1080px) {
        grid-column: 1 / 9;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        z-index: 5;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-overline {
      margin: 10px 0;
      color: ${({ theme }) => theme.colors.teal};
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 13px;
      font-weight: 400;
    }

    .project-title {
      color: ${({ theme }) => theme.colors.lightestSlate};
      font-size: clamp(24px, 5vw, 28px);

      @media (min-width: 768px) {
        margin: 0 0 20px;
      }

      @media (max-width: 768px) {
        color: ${({ theme }) => theme.colors.white};

        a {
          position: static;

          &:before {
            content: '';
            display: block;
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
        }
      }
    }

    .project-description {
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
      transition: ${({ theme }) => theme.transition};
      position: relative;
      z-index: 2;
      padding: 25px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.lightNavy};
      color: ${({ theme }) => theme.colors.lightSlate};
      font-size: 18px;

      @media (max-width: 768px) {
        padding: 20px 0;
        background-color: transparent;
        box-shadow: none;

        &:hover {
          box-shadow: none;
        }
      }

      a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: ${({ theme }) => theme.transition};
        color: ${({ theme }) => theme.colors.teal};

        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.colors.teal};
          outline: 0;
          &:after {
            width: 100%;
          }
        }
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          position: absolute;
          bottom: 0.37em;
          background-color: ${({ theme }) => theme.colors.teal};
          transition: ${({ theme }) => theme.transition};
          opacity: 0.5;
        }
      }
    }

    .project-tech-list {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 2;
      margin: 25px 0 10px;
      padding: 0;
      list-style: none;

      li {
        margin: 0 20px 5px 0;
        color: ${({ theme }) => theme.colors.lightSlate};
        font-family: ${({ theme }) => theme.fonts.mono};
        font-size: 13px;
        white-space: nowrap;
      }

      @media (max-width: 768px) {
        margin: 10px 0;

        li {
          margin: 0 10px 5px 0;
          color: ${({ theme }) => theme.colors.lightestSlate};
        }
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 10px;
      margin-left: -10px;
      color: ${({ theme }) => theme.colors.lightestSlate};

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .project-image {
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
      grid-column: 6 / -1;
      grid-row: 1 / -1;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        height: 100%;
        opacity: 0.25;
      }

      a {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.teal};
        border-radius: 4px;
        vertical-align: middle;

        &:hover,
        &:focus {
          background: transparent;
          outline: 0;

          &:before {
            background: transparent;
            filter: none;
          }

          .img {
            filter: none;
            mix-blend-mode: normal;
          }
        }

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          transition: ${({ theme }) => theme.transition};
          background-color: ${({ theme }) => theme.colors.navy};
          mix-blend-mode: screen;
        }
      }

      .img {
        border-radius: 4px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1) brightness(90%);
        transition: ${({ theme }) => theme.transition};

        @media (max-width: 768px) {
          object-fit: cover;
          width: auto;
          height: 100%;
          filter: grayscale(100%) contrast(1) brightness(50%);
        }
      }
    }
  }
`;

const Projects = () => {
    const projects = [
        {
            title: 'Random Password Generator',
            cover: 'https://via.placeholder.com/600x400/112240/64ffda?text=Passgen',
            github: 'https://github.com/iamalibinsaeed/passgen',
            external: '#',
            tech: ['JavaScript', 'HTML5', 'CSS3'],
            html: 'A secure, customizable password generation tool built to ensure user privacy and account safety. Features dynamic strength indicators and one-click copying.',
        },
        {
            title: 'Abraham Estate UI',
            cover: 'https://via.placeholder.com/600x400/112240/64ffda?text=Abraham+Estate',
            github: 'https://github.com/iamalibinsaeed/react-real-estate-ui',
            external: '#',
            tech: ['React', 'Styled Components', 'Hooks'],
            html: 'A high-fidelity Real Estate Management System UI. Designed with a focus on user experience, property filtering, and seamless navigation.',
        },
    ];

    return (
        <StyledProjectsSection id="projects">
            <h2 className="section-title"><span>03.</span> Some Things I’ve Built</h2>

            <div className="project-list">
                {projects.map((project, i) => (
                    <div className="project-item" key={i}>
                        <div className="project-content">
                            <p className="project-overline">Featured Project</p>
                            <h3 className="project-title">
                                <a href={project.external !== '#' ? project.external : project.github}>{project.title}</a>
                            </h3>
                            <div
                                className="project-description"
                                dangerouslySetInnerHTML={{ __html: project.html }}
                            />
                            {project.tech.length && (
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                )}
                                {project.external && project.external !== '#' && (
                                    <a href={project.external} aria-label="External Link" className="external" target="_blank" rel="noreferrer">
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="project-image">
                            <a href={project.external !== '#' ? project.external : project.github ? project.github : '#'}>
                                <img src={project.cover} alt={project.title} className="img" style={{ width: '100%', display: 'block' }} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </StyledProjectsSection>
    );
};

export default Projects;
