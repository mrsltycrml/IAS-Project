import Image from 'next/image';
import Link from 'next/link';
import { notes } from '@/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-avatar');
  const noteImages = new Map(
    PlaceHolderImages.map((img) => [img.id, img])
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-in fade-in-0 duration-700">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-16">
        {userAvatar && (
          <Image
            src={userAvatar.imageUrl}
            alt="My Photo"
            width={128}
            height={128}
            className="rounded-full shadow-lg border-4 border-card"
            data-ai-hint={userAvatar.imageHint}
            priority
          />
        )}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated collection of my notes, and learning journey as a BSIT student.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
          My Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note) => {
            const noteImage = noteImages.get(note.imageId);
            return (
              <Card
                key={note.id}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  {noteImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={noteImage.imageUrl}
                        alt={note.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={noteImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardTitle className="text-xl font-semibold mb-2">{note.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed h-20 overflow-hidden">
                      {note.snippet}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-accent-foreground font-semibold">
                    <Link href={`/notes/${note.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
