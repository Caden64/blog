
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import {BC} from "@/components/BC";

export function BlogCarousel(props) {
    return (
        <div className="flex justify-center item-center">
            <Carousel className="md:w-[260px] w-[220px]">
                <CarouselContent className="-ml-[1px]">
                    {props.blogs.map((blog) => (
                        <CarouselItem key={blog.data.id} className="pl-[1px]">
                            <a href={`/blogs/${blog.slug}`}>
                                <div className="p-2">
                                    <BC
                                        title={blog.data.title}
                                        image={blog.data.image.url}
                                        image_alt={blog.data.image.alt}
                                        description={blog.data.description}
                                    />
                                </div>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}