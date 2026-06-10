import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import arrowIcon from "../assets/icons/arrow-right-orange.svg";

const Explore = () => {
  const { currentUser, Courses } = useOutletContext();
  const {firstname, lastname, email, course, id, password, picture} = currentUser;
  const foundCourse = Courses.find(item => item.department === course)

  const subjects = foundCourse?.subject_areas || [];
  // console.log(subjectAreas)

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllBooks() {
      setLoading(true);
      let tempResults = [];

      for (const subject of subjects){
        console.log(`Fetching ${subject}...`);

        try {
          const response = await fetch(`https://openlibrary.org/subjects/${subject}.json?published_in=2000-2026&limit=10`);
          const data = await response.json();

          tempResults.push({
            subject: subject,
            books: data.works
          });
        } catch (error) {
          console.error(`Failed to get ${subject}:`, error);
        }
      }
      setResults(tempResults);
      setLoading(false);
      console.log(tempResults);
    }

    if (subjects && subjects.length > 0) {
      getAllBooks();
    }

  }, [subjects])

  if (loading) return <p>Loading library...</p>;

  return(
    <>
      <div className="h-screen flex-1 overflow-y-scroll no-scrollbar pb-24">
      {results.map((item, index) => (
        <div key={index} className="flex flex-col gap-8 py-4 mb-4">
          <h3 className="font-semibold text-primary text-xl flex gap-2 items-center">{item.subject}<img src={arrowIcon}/></h3>
          <ul className="flex gap-8 overflow-x-scroll w-full no-scrollbar">
            {item.books.map((book) => (
              <li className="shrink-0 rounded-md" key={book.key}>
                
                {book.cover_id ? (
                  <img className="h-[260px] w-[180px] rounded-md" src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`} alt="" />
                ) : (
                  <div className="h-[260px] w-[180px] rounded-md bg-secondary-light flex items-center justify-center">
                    No Cover
                  </div>
                )}

              </li>
            )) }
          </ul>
        </div>
      ))}
    </div>
    </>
  )
}

export default Explore;