export interface myInfoI {
    hobby :string[];
    experiences:experienceI[];
    educations:educationI[];
}

export interface experienceI{
    companyName:string;
    startDate:Date;
    endDate:Date;
    desc:string;
}

export interface educationI{
    school_college_name:string,
    startDate:Date;
    endDate:Date;
    percentage_cgpa:string;
}

const hobby:string[]=[];

const experiences:experienceI[]=[
    {
        companyName: "FSS",
        startDate:  new Date('2024-12-04'), // yyyy-mm-dd
        endDate: new Date(new Date().toDateString()), // yyyy-mm-dd
        desc: `Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working`
    },
    {
        companyName: "FSS",
        startDate:  new Date('2024-12-04'), // yyyy-mm-dd
        endDate: new Date(new Date().toDateString()), // yyyy-mm-dd
        desc: `Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working Working`
    }
];

const educations:educationI[]=[];

export const myProfessnalInfo:myInfoI={
    hobby: hobby,
    experiences: experiences,
    educations: educations
}