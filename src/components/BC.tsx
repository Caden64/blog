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
    <Card className="w-[200px] md:w-[240px] flex flex-col justify-center items-center bg-slate-50">
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
