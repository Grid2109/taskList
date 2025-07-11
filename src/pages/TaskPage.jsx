import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";

export function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex gap-1 justify-center relative mb-6">
            <button onClick={() => navigate(-1)} className="absolute left-0 bottom cursor-pointer">
                <ChevronLeftIcon color="white"/>
            </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="p-4 bg-slate-200 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
