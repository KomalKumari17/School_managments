// components/HomeHero.js

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const HomeHero = () => {
    return (
      <Card className="p-10 flex items-center h-96 bg-slate-300">
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="text-4xl text-blue-950">Welcome to our Coaching Website</CardTitle>
          <CardDescription>Lorem ipsum dolor cumque dolores, corrupti asperiores, nobis nostrum, nemo tenetura.</CardDescription>
          <Link href="" className="mt-5">
          <Button>Join Now</Button>
        </Link>
        </CardContent>
      </Card>
    );
  };
  
  
  export default HomeHero;

  