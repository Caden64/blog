import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card.jsx";
import * as React from "react";

export function BC(props) {
return (
    <Card className="w-[200px] md:w-[240px] flex flex-col justify-center items-center bg-slate-50 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#000,0_0_15px_#08f,0_0_0px_#08f,0_0_1px_#08f]">
        <CardHeader className="flex flex-col justify-center items-center">
            <CardTitle className="text-xl">{props.title}</CardTitle>
            <img src={props.image} alt={props.image_alt} width="150" height="1" />
        </CardHeader>
        <CardContent>
            <CardDescription>{props.description}</CardDescription>
        </CardContent>
    </Card>
)
}
