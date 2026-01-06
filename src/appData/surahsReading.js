import axios from "axios";

function mapSurahFromApi(surah) {
  // سورة الفاتحة (1) وسورة التوبة (9) لهما وضع خاص
  const hasBasmalah = surah.number !== 1 && surah.number !== 9;

  return {
    name: surah.name.replace("سُورَةُ ", ""),
    nameInEnglish: surah.englishName.replace("-", "").toLowerCase(),
    location: surah.revelationType === "Meccan" ? "سورة مكية" : "سورة مدنية",
    numberOfAyat: surah.ayahs.length.toString(),
    // نص البسملة الموحد للعرض
    basmala: hasBasmalah ? "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" : "",
    ayat: surah.ayahs
      .map((ayah, index) => {
        let text = ayah.text;
        
        // حذف البسملة المدمجة في أول آية من الـ API لغير الفاتحة والتوبة
        if (index === 0 && hasBasmalah) {
          // هذا النص هو التنسيق الدقيق الذي يرسله API alquran.cloud
          const apiBasmalah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
          if (text.startsWith(apiBasmalah)) {
            text = text.replace(apiBasmalah, "").trim();
          }
        }
        
        // إرجاع نص الآية مع رقمها بتنسيق دائري أو بين أقواس
        return `${text} ﴿${ayah.numberInSurah}﴾`;
      })
      .join(" "), // دمج الآيات بمسافة واحدة فقط
    src: `/${String(surah.number).padStart(3, "0")}.mp3`,
  };
}

export async function getSurahsReading() {
  try {
    const response = await axios.get("https://api.alquran.cloud/v1/quran/quran-uthmani");
    return response.data.data.surahs.map(mapSurahFromApi);
  } catch (err) {
    console.error("Error fetching Quran data:", err.message);
    return [];
  }
}