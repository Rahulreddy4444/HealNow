"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import DoctorCard , {Doctor} from "./DoctorCard";
import SuggestedDoctorCard from "./SuggestedDoctorCard";
import { useRouter } from "next/navigation";

function NewSession() {
    const [note,setNote] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [suggestedDoctors, setSuggestedDoctors] = useState<Doctor>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor>();
    const router = useRouter();
    const onClickNext = async () => {
        setLoading(true);
        const result = await axios.post('/api/session-doctors', {
            notes: note
        });
        console.log(result.data);
        setSuggestedDoctors(result.data);
        setLoading(false);
    }

    const onStartConversation = async () => {
        setLoading(true);
        const result = await axios.post('/api/session-chat',{
            notes: note,
            selectedDoctor: selectedDoctor
        });
        console.log(result.data);
        if(result.data?.sessionId){
            console.log(result.data.sessionId);
        }
        setLoading(false);
    }
  return (
    <div>
      <Dialog>
        <DialogTrigger>
            <Button className='mt-3'>+ Start a Consultation</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Basic Details</DialogTitle>
            <DialogDescription asChild>
              <div>
                <h2>Add Symtoms or Any other details</h2>
                <Textarea onChange={(e)=>setNote(e.target.value)} placeholder="Add Details here..." className="h-[200px] mt-1"/>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
                <Button variant={'outline'}>Cancel</Button>
            </DialogClose>
            <Button disabled={!note}>Next <ArrowRight /></Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewSession;
