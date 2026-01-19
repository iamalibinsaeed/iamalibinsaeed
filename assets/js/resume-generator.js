// Resume Generator using jsPDF
// This module generates a professional resume PDF based on LinkedIn data

const resumeData = {
    personal: {
        name: "Ali Bin Saeed",
        title: "Software Engineer in Test",
        email: "iamalibinsaeed@gmail.com",
        phone: "+92 317 6327721", // Update with your phone number
        location: "Pakistan",
        linkedin: "linkedin.com/in/iamalibinsaeed",
        github: "github.com/iamalibinsaeed",
        website: "iamalibinsaeed.github.io"
    },

    summary: "Software Engineer specializing in Software Testing, skilled in React.js, PHP, and WordPress. Experienced in building responsive web applications and customizing CRM systems like SugarCRM and SuiteCRM. Passionate about ensuring product quality, optimizing performance, and solving technical challenges through a blend of development and testing expertise.",

    experience: [
        {
            title: "Software Engineer in Test",
            company: "Smart Techlodge",
            location: "Pakistan",
            period: "September 2025 - Present",
            responsibilities: [
                "Leading automated testing initiatives and quality assurance workflows",
                "Ensuring every feature delivers the best possible user experience",
                "Implementing comprehensive test strategies for web applications"
            ]
        },
        {
            title: "Software Engineer",
            company: "AWAYR",
            location: "Pakistan",
            period: "February 2025 - May 2025",
            responsibilities: [
                "Collaborated with development teams to create responsive UIs using React.js and Vue.js",
                "Integrated APIs for seamless data exchange and enhanced application functionality",
                "Performed code reviews and implemented clean code best practices"
            ]
        },
        {
            title: "Software Engineer",
            company: "IT Extension",
            location: "Pakistan",
            period: "August 2024 - January 2025",
            responsibilities: [
                "Leveraged React hooks and state management for interactive web apps",
                "Optimized frontend performance and ensured cross-browser compatibility",
                "Delivered robust applications by analyzing complex requirements"
            ]
        },
        {
            title: "Software Quality Assurance Engineer",
            company: "Smart Techlodge",
            location: "Pakistan",
            period: "February 2024 - July 2024",
            responsibilities: [
                "Developed and executed comprehensive test plans for web applications",
                "Identified and documented software defects and quality issues",
                "Collaborated with development teams to ensure product quality"
            ]
        },
        {
            title: "Software Engineer",
            company: "Smart Techlodge",
            location: "Pakistan",
            period: "February 2023 - January 2024",
            responsibilities: [
                "Customized and maintained SugarCRM and SuiteCRM systems",
                "Developed custom modules and workflows for CRM platforms",
                "Provided technical support and training to end users"
            ]
        },
        {
            title: "Trainee Web Developer - Laravel",
            company: "IT Centre Rahim Yar Khan",
            location: "Pakistan",
            period: "January 2023 - February 2023",
            responsibilities: [
                "Gained hands-on experience in Laravel framework",
                "Worked on real-world projects during intensive training period"
            ]
        }
    ],

    education: [
        {
            degree: "Bachelor of Science (BS), Computer Science",
            institution: "National College of Business Administration & Economics",
            location: "Pakistan",
            period: "2017 - 2021"
        },
        {
            degree: "ICS, Computer Engineering",
            institution: "Nicaas Colleges, Rahim Yar Khan",
            location: "Pakistan",
            period: "2014 - 2016"
        }
    ],

    certifications: [
        {
            name: "Foundations of Project Management",
            issuer: "Google",
            date: "January 2026"
        },
        {
            name: "Generative AI Overview for Project Managers",
            issuer: "PMI",
            date: "November 2025"
        },
        {
            name: "Nestlé E-Learning Sustainability",
            issuer: "Nestlé",
            date: "May 2024"
        },
        {
            name: "Technical Training Course",
            issuer: "e-Rozgaar Program - Punjab IT Board",
            date: "July 2022"
        },
        {
            name: "Introduction to Cloud Identity",
            issuer: "Google Cloud Security",
            date: "August 2020"
        }
    ],

    skills: {
        technical: [
            "JavaScript (ES6+)", "React.js", "Vue.js", "Next.js",
            "PHP", "Laravel", "Node.js",
            "WordPress", "SugarCRM", "SuiteCRM",
            "HTML5", "CSS3", "Tailwind CSS",
            "Git", "GitHub", "Google Cloud Platform (GCP)"
        ],
        testing: [
            "Software Quality Assurance", "STLC", "Test Planning",
            "Automated Testing", "Manual Testing", "Bug Tracking"
        ],
        soft: [
            "Project Management", "Team Collaboration",
            "Problem Solving", "Communication"
        ]
    }
};

function generateResume() {
    // Check if jsPDF is loaded
    if (typeof window.jspdf === 'undefined') {
        console.error('jsPDF library not loaded');
        alert('Resume generator is loading. Please try again in a moment.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPos = 20;
    const leftMargin = 20;
    const rightMargin = 190;
    const lineHeight = 7;

    // Colors
    const primaryColor = [100, 255, 218]; // Teal
    const darkColor = [10, 25, 47];
    const grayColor = [136, 146, 176];

    // Helper function to add text with word wrap
    function addText(text, x, y, maxWidth, fontSize = 10, color = darkColor) {
        doc.setFontSize(fontSize);
        doc.setTextColor(...color);
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return y + (lines.length * (fontSize * 0.4));
    }

    // Header - Name and Title
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...darkColor);
    doc.text(resumeData.personal.name, leftMargin, yPos);

    yPos += 8;
    doc.setFontSize(14);
    doc.setTextColor(...grayColor);
    doc.text(resumeData.personal.title, leftMargin, yPos);

    // Contact Information
    yPos += 8;
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    const contactInfo = `${resumeData.personal.email} | ${resumeData.personal.linkedin} | ${resumeData.personal.github}`;
    doc.text(contactInfo, leftMargin, yPos);

    // Horizontal line
    yPos += 5;
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, yPos, rightMargin, yPos);

    // Summary
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...darkColor);
    doc.text('PROFESSIONAL SUMMARY', leftMargin, yPos);

    yPos += 6;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...grayColor);
    yPos = addText(resumeData.summary, leftMargin, yPos, rightMargin - leftMargin, 10, grayColor);

    // Experience
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...darkColor);
    doc.text('PROFESSIONAL EXPERIENCE', leftMargin, yPos);

    resumeData.experience.forEach((job, index) => {
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }

        yPos += 7;
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...darkColor);
        doc.text(job.title, leftMargin, yPos);

        yPos += 5;
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...grayColor);
        doc.text(`${job.company} | ${job.period}`, leftMargin, yPos);

        yPos += 5;
        job.responsibilities.forEach(resp => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            doc.setFontSize(9);
            doc.text('•', leftMargin + 2, yPos);
            yPos = addText(resp, leftMargin + 7, yPos, rightMargin - leftMargin - 7, 9, grayColor);
            yPos += 1;
        });
    });

    // Education
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }

    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...darkColor);
    doc.text('EDUCATION', leftMargin, yPos);

    resumeData.education.forEach(edu => {
        yPos += 7;
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.text(edu.degree, leftMargin, yPos);

        yPos += 5;
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...grayColor);
        doc.text(`${edu.institution} | ${edu.period}`, leftMargin, yPos);
    });

    // Certifications
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...darkColor);
    doc.text('CERTIFICATIONS', leftMargin, yPos);

    resumeData.certifications.forEach(cert => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        yPos += 6;
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...grayColor);
        doc.text(`• ${cert.name} - ${cert.issuer} (${cert.date})`, leftMargin + 2, yPos);
    });

    // Skills
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }

    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(...darkColor);
    doc.text('TECHNICAL SKILLS', leftMargin, yPos);

    yPos += 6;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...grayColor);
    const allSkills = [...resumeData.skills.technical, ...resumeData.skills.testing];
    const skillsText = allSkills.join(' • ');
    yPos = addText(skillsText, leftMargin, yPos, rightMargin - leftMargin, 10, grayColor);

    // Save the PDF
    doc.save('Ali_Bin_Saeed_Resume.pdf');
}

// Make function globally available
window.generateResume = generateResume;
