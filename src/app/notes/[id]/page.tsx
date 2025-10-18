import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { notes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { parse } from 'marked';

type NotePageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return notes.map((note) => ({
    id: note.id,
  }));
}

export default function NotePage({ params }: NotePageProps) {
  const note = notes.find((n) => n.id === params.id);

  if (!note) {
    notFound();
  }

  const noteImage = PlaceHolderImages.find((img) => img.id === note.imageId);

  // If the note points to a markdown file, load it from src/content at build time
  let markdownHtml = '';
  if (note?.file) {
    const contentDir = path.join(process.cwd(), 'src', 'content');
    const filePath = path.join(contentDir, note.file);
    try {
      const md = fs.readFileSync(filePath, 'utf8');
      markdownHtml = parse(md);
    } catch (err) {
      console.error('Failed to read markdown for note', note.id, err);
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-in fade-in-0 duration-700">
      <Card>
        <CardHeader>
          {noteImage && (
            <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={noteImage.imageUrl}
                alt={note.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                data-ai-hint={noteImage.imageHint}
                priority
              />
            </div>
          )}
          <CardTitle className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {note.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg text-foreground/90">
            {/* Prefer markdown file content when available, otherwise use note.content */}
            {markdownHtml ? (
              <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: parse(note.content) }} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
