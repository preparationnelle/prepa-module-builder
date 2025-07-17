
export interface SchoolPoint {
  title: string;
  description: string;
}

export interface SchoolAccordionItem {
  title: string;
  content: string;
}

export interface SchoolData {
  name: string;
  shortDescription: string;
  presentation: {
    title: string;
    content: string[];
    values: {
      title: string;
      content: string[];
    };
  };
  keyPoints: SchoolPoint[];
  interviewStyle: {
    title: string;
    content: string[];
  };
  tips: SchoolAccordionItem[];
}
