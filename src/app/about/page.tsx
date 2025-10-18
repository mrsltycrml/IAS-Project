import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const userProfileImage = PlaceHolderImages.find((img) => img.id === 'user-profile');

  return (
    <div className="py-12 md:py-16 animate-in fade-in-0 duration-700">
      <Card className="overflow-hidden">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <div className="md:col-span-1 p-6 flex justify-center items-center">
            {userProfileImage && (
              <Image
                src={userProfileImage.imageUrl}
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full shadow-2xl aspect-square object-cover border-4 border-card"
                data-ai-hint={userProfileImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-4xl font-bold tracking-tight">
                About Me
              </CardTitle>
              <h2 className="text-2xl font-semibold text-foreground mt-2">
                Carlos Miguel F. Busuego
              </h2>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hello! I'm a dedicated BSIT (Bachelor of Science in Information Technology) student at New Era University. I'm passionate about technology and driven by the endless possibilities it offers to solve real-world problems.
              </p>
              <p>
                As a student at New Era University, I'm focused on building a strong foundation in both theoretical concepts and practical applications of Information Technology. My coursework has exposed me to various aspects of IT, from programming and database management to web development and cybersecurity.
              </p>
              <p>
                When I'm not in class or working on assignments, I enjoy exploring new technologies and working on personal coding projects. I believe in continuous learning and staying up-to-date with the latest developments in the tech industry. This website serves as a portfolio of my learning journey and projects.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Web Development (HTML, CSS, JavaScript)</li>
                  <li>Programming (Python, Java)</li>
                  <li>Database Management</li>
                  <li>Problem Solving & Debugging</li>
                  <li>System Analysis & Design</li>
                </ul>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
