import Card from "@/components/card";
import Grid from "@/components/Grid";
import ReusableCard from "@/components/reusablecard";
import States from "@/components/state";
import Cities from "@/components/cities";
import Form from "@/components/forms";
// @/*

export default function Home() {
  return (
    <div className="h-screen">
      <Form/>
 
    <States/>
    <Cities/>
    </div>
  );
}