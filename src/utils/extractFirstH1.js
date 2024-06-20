import { remark } from 'remark';

export default function extractFirstH1(markdown) {
    // remark parse를 통해 마크다운 파싱
    const tree = remark().parse(markdown);

    // 트리의 노드들 중 첫 번째 H1 헤딩을 찾는다
    for (const node of tree.children) {
        if (node.type === 'heading' && node.depth === 1) {
            return node.children
                .filter((child) => child.type === 'text') // 텍스트 노드만 추출
                .map((child) => child.value) // 텍스트 값만 추출
                .join('');
        }
    }

    return ''; // H1 헤딩이 없는 경우 빈 문자열 반환
}
