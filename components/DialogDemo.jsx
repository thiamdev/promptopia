'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { User } from "lucide-react"

export function DialogDemo() {


  const { data: session } = useSession();

  const [comment, setComment] = useState({
    username: '',
    userImage: '',
    commentText: '',
  });
  console.log(comment)



  const searchParams = useSearchParams()
  const postId = searchParams.get("name");

  const submitComment = async () => {
   
    try {
      const response = await fetch(`/api/comment/${postId}`, {
        method: 'POST',
        body: JSON.stringify({
          username: session?.user.name,
          userImage: session?.user.image,
          commentText: comment.commentText,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du commentaire');
      }

      const result = await response.json();
      console.log('Commentaire ajouté:', result);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit px-6">Ajouter un commentaire</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[60vh]">
        <form
          onSubmit={() => {
            submitComment();
          }}
        >
          <DialogHeader>
            <DialogTitle>


            </DialogTitle>
            <DialogTitle>
            
              Commentaire
            </DialogTitle>
            <DialogDescription>
              Quant penser vous de cette article?

            </DialogDescription>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
             
              <Textarea placeholder="Quant penser vous..."
                value={comment.commentText}
                onChange={(e) => setComment({ ...comment, commentText: e.target.value })} className="col-span-3 h-40" />

            </div>

          </div>
          <DialogFooter>
           
            <Button type="submit">Commenter</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
