const tags = [
  '송도동', '역삼동', '물금읍', '봉담읍', '배곧동',
  '서초동', '유정동', '신림동', '불당동', '향남읍'
];

export default function AreaTagList() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-orange-100 cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}