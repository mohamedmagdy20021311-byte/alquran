import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] px-4 text-center">
      {/* رقم الخطأ بشكل جمالي */}
      <h1 className="text-9xl font-bold text-primary/20 amiri select-none">٤٠٤</h1>
      
      {/* رسالة توضيحية */}
      <div className="-mt-10]">
        <h2 className="text-3xl font-bold text-header-text mb-4 amiri">عذراً، الصفحة غير موجودة</h2>
        <p className="text-xl text-gray-600 mb-8 amiri">
          يبدو أنك ضللت الطريق، يمكنك العودة للصفحة الرئيسية لمتابعة القراءة.
        </p>
      </div>

      {/* زر العودة */}
      <Link
        to="/"
        className="px-8 py-3 bg-header text-primary font-bold rounded-full shadow-lg 
                   hover:bg-primary hover:text-white transition-all duration-300 
                   border-2 border-primary"
      >
        العودة للرئيسية
      </Link>

      {/* آية قرآنية مناسبة للسياق (اختياري) */}
      <p className="mt-12 text-gray-400 italic amiri text-lg">
        "وَقُل رَّبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ"
      </p>
    </div>
  );
}

export default NotFound;