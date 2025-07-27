export interface projectContentI {
    name: string,
    description: string,
    technology: string[],
    screenshots: any[],
    demo: string,
}

export const projectContent: projectContentI[] = [
    {
        name: 'Student Management System',
        description: `
        
        `,
        technology: [
            'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
            'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
        ],
        screenshots: [
            'assets/screenshots/1.png',
            'assets/screenshots/2.png',
            'assets/screenshots/3.png',
        ],
        demo: "live demo"
    },
    {
        name: "Motion Detector",
        description: `
        
        `,
        technology: [
            'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
            'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
        ],
        screenshots: [],
        demo: "live demo"
    },
    {
        name: "Library Management System",
        description: `
        
        `,
        technology: [
            'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
            'Angular', 'Jaa', 'Spring boot 3', 'Spring 6', 'Kafka', 'Redis',
        ],
        screenshots: [],
        demo: "live demo"
    }
]