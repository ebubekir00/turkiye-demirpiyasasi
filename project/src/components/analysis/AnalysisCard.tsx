import { Calendar, User } from 'lucide-react';

interface Analysis {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  author: string;
  authorTitle: string;
  image: string;
}

interface AnalysisCardProps {
  analysis: Analysis;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ analysis }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={analysis.image} 
          alt={analysis.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-steel-100 text-steel-700 text-xs font-medium px-2.5 py-1 rounded">
            {analysis.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {analysis.date}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-steel-800 mb-3 group-hover:text-rust-600 transition-colors">
          {analysis.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {analysis.summary}
        </p>
        
        <div className="flex items-center border-t border-gray-100 pt-4">
          <div className="bg-steel-200 rounded-full p-2 mr-3">
            <User className="w-5 h-5 text-steel-700" />
          </div>
          <div>
            <p className="font-medium text-steel-800">{analysis.author}</p>
            <p className="text-sm text-gray-500">{analysis.authorTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;