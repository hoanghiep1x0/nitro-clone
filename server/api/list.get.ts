import { defineEventHandler, getQuery } from 'h3'

interface Track {
  id: number,
  title: string;
  src: string;
}

// Dữ liệu bài hát mẫu
const allTracks: Track[] = [
    { id: 1, title: 'Song 1', src: 'https://a128-z3.zmdcdn.me/e4149c58d2f3155d790a5a3eb36279bf?authen=exp=1717821870~acl=/e4149c58d2f3155d790a5a3eb36279bf/*~hmac=a6db0888d5afdcef0af2608bb0c1b20f' },
    { id: 2, title: 'Song 2', src: 'https://a128-z3.zmdcdn.me/ae1405b35af201ddea7e9f45f9697558?authen=exp=1717822464~acl=/ae1405b35af201ddea7e9f45f9697558/*~hmac=860f4e28f76872fe70b6d6e671b9d1d3' },
    { id: 3, title: 'Song 3', src: 'https://a128-z3.zmdcdn.me/43f1926155bc18882fee5e6f76a529e4?authen=exp=1717822286~acl=/43f1926155bc18882fee5e6f76a529e4/*~hmac=9c7c829bdbb31665d5c173dcfc98fb07' },
    { id: 4, title: 'Song 4', src: 'https://a128-z3.zmdcdn.me/1ce7d360ef9b85465d614ec0354b0101?authen=exp=1717822484~acl=/1ce7d360ef9b85465d614ec0354b0101/*~hmac=2f482e02bd1a777f9a3949aa4360c7dc' },
    { id: 5, title: 'Song 5', src: 'https://a128-z3.zmdcdn.me/db508d053ff447dc6b986343e1ae9a94?authen=exp=1717822495~acl=/db508d053ff447dc6b986343e1ae9a94/*~hmac=5fb0496f8ea7262bbbf1ddd72c67539f' },
    { id: 6, title: 'Song 6', src: 'https://a128-z3.zmdcdn.me/561fa3e7d8f08cb804b849fe1bdf1001?authen=exp=1717822503~acl=/561fa3e7d8f08cb804b849fe1bdf1001/*~hmac=eabab8563119e2862f97f49bc4272199' },
    { id: 7, title: 'Song 7', src: 'https://a128-z3.zmdcdn.me/3f2c97d52bac07f0b3c6d56e6024d05c?authen=exp=1717822512~acl=/3f2c97d52bac07f0b3c6d56e6024d05c/*~hmac=475a8d56119ed198593a9bf06929eb0a' },
    { id: 8, title: 'Song 8', src: 'https://a128-z3.zmdcdn.me/645cb8f19684ff1d84eb25578a13e277?authen=exp=1717822412~acl=/645cb8f19684ff1d84eb25578a13e277/*~hmac=0e7234988f7b76872c221f6f694d0c03' },
    { id: 9, title: 'Song 9', src: 'https://a128-z3.zmdcdn.me/38a3c895ab5fcbd8015fa3f73483bdf9?authen=exp=1717822276~acl=/38a3c895ab5fcbd8015fa3f73483bdf9/*~hmac=70b8204c112407a4c7fd7e3d1881bca5' },
    { id: 10, title: 'Song 10', src: 'https://a128-z3.zmdcdn.me/4d1748d0d066cb5a8366906699fe9620?authen=exp=1717822090~acl=/4d1748d0d066cb5a8366906699fe9620/*~hmac=0e9d47f9848d45f1f0e60cfb5d46eef4' }
];

export default defineEventHandler((event) => {
  const { page = '1', limit = '3', startId } = getQuery(event)

  const pageNumber = parseInt(page as string)
  const limitNumber = parseInt(limit as string)

  // Lấy index của startId nếu có, nếu không sẽ lấy từ đầu
  const startIndex = startId ? allTracks.findIndex(track => track.id === parseInt(startId as string)) : (pageNumber - 1) * limitNumber
  const endIndex = startIndex + limitNumber
  console.log(startIndex);
  console.log(endIndex);

  const tracks = allTracks.slice(startIndex, endIndex)

  return { tracks }
})
