import PageTitle from "../utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
import academicsServices from "../features/academics/services/academics.services";
import Loader from "../components/Loader";
import Error from "../components/Error";
import AcademicDetail from "../features/academics/components/AcademicDetail";
import { useParams } from "react-router-dom";

const AcademicDetailPage = () => {
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: [`academicDetail${id}`],
    queryFn: () => academicsServices.getOneAcademic(id),
  });
  const refineData = data?.data;

  return (
    <>
      <PageTitle key={"academicPage"} title={"Academic"} />
      <div className="max-w-[1144px] w-[95%] mx-auto mt-[100px] px-4 sm:px-6 lg:px-8">
        {isPending && <Loader key={"loader"} />}
        {isError && <Error key={"error"} errorMessage={error.message} />}
        {data && (
          <div className="flex justify-center items-center min-h-[64.5vh]">
            <AcademicDetail
              key={"academicDetailComponent"}
              className={refineData?.class_name}
              classTitle={refineData?.class_title}
              classStudentCount={refineData?.student_count}
              classSetCount={refineData?.number_seat}
              createdAt={refineData?.class_created}
              updatedAt={refineData?.class_update}
              classDescription={refineData?.class_description}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AcademicDetailPage;
