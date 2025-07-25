// src/components/ExperienceCard.tsx
import '../styles/experiencecard.scss'


interface ExperienceCardProps {
  logo: string;
  company: string;
  period: string;
  role: string;
  missions: string[];
  stack: string[];
  bgColor?: string; // ← optionnel si tu veux une couleur par défaut
}


const ExperienceCard : React.FC<ExperienceCardProps>= ({  company, period, role, missions, stack, bgColor = 'blue-1'}) => {
  return (
    <div className={`experience-card ${bgColor}`}>
 
      <div className="content">
        <h3>{company}</h3>
        <p className="meta">
          {period} | <span className="role">{role}</span>
        </p>
        <ul className="missions">
          {missions.map((item : any, index: any) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="stack">Stack : {stack.join(", ")}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;