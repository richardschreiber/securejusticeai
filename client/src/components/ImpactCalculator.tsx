import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Users, Clock, TrendingUp } from "lucide-react";

export function ImpactCalculator() {
  const [attorneys, setAttorneys] = useState([10]);
  const [clientsPerYear, setClientsPerYear] = useState([1000]);
  
  const [projectedClients, setProjectedClients] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

  useEffect(() => {
    // Logic based on report metrics:
    // 1. 50% capacity expansion
    // 2. 300 hours saved per attorney per year
    
    const currentAttorneys = attorneys[0];
    const currentClients = clientsPerYear[0];
    
    const newCapacity = Math.round(currentClients * 1.5);
    const totalHours = currentAttorneys * 300;
    
    setProjectedClients(newCapacity);
    setHoursSaved(totalHours);
  }, [attorneys, clientsPerYear]);

  return (
    <div className="border-2 border-border bg-background p-8 shadow-[8px_8px_0px_0px_var(--color-border)]">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          IMPACT CALCULATOR
        </h3>
        <p className="text-muted-foreground">
          Estimate your organization's potential gains with IT/AI in a Box.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-bold font-mono text-sm uppercase">Number of Attorneys</label>
              <span className="text-2xl font-bold text-primary font-mono">{attorneys[0]}</span>
            </div>
            <Slider
              value={attorneys}
              onValueChange={setAttorneys}
              max={100}
              min={1}
              step={1}
              className="py-4"
            />
            <p className="text-xs text-muted-foreground">Drag to adjust staff size</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-bold font-mono text-sm uppercase">Current Clients Served / Year</label>
              <span className="text-2xl font-bold text-primary font-mono">{clientsPerYear[0].toLocaleString()}</span>
            </div>
            <Slider
              value={clientsPerYear}
              onValueChange={setClientsPerYear}
              max={10000}
              min={100}
              step={50}
              className="py-4"
            />
            <p className="text-xs text-muted-foreground">Drag to adjust annual caseload</p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="box-card bg-accent border-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground p-2 border-2 border-border shadow-[2px_2px_0px_0px_var(--color-border)]">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold uppercase text-primary mb-1">Projected Capacity</div>
                <div className="text-4xl font-bold font-display tracking-tight">
                  {projectedClients.toLocaleString()}
                </div>
                <div className="text-sm font-medium mt-1">
                  <span className="text-primary font-bold">+{ (projectedClients - clientsPerYear[0]).toLocaleString() }</span> additional clients served
                </div>
              </div>
            </div>
          </div>

          <div className="box-card bg-secondary">
            <div className="flex items-start gap-4">
              <div className="bg-background text-foreground p-2 border-2 border-border shadow-[2px_2px_0px_0px_var(--color-border)]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold uppercase text-muted-foreground mb-1">Hours Redirected to Advocacy</div>
                <div className="text-4xl font-bold font-display tracking-tight">
                  {hoursSaved.toLocaleString()}
                </div>
                <div className="text-sm font-medium mt-1 text-muted-foreground">
                  hours saved annually across your team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
