import React from "react";
import { Box, Container, Typography, Paper, List, ListItem } from '@mui/material';

const TermsAndConditionsOfUsePage = () => {

    return(
        <Container>
            <Paper sx={{ padding: 3 }}>
                <Typography variant="h3" gutterBottom textAlign="center" sx={{ paddingBottom: 5 }}>
                이용약관
                </Typography>
                <Typography variant="h4" sx={{ marginBottom: 4 }}>
                제 1 장 환영합니다!
                </Typography>
                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 1 조 목적 및 정의
                    </Typography>
                    <Typography paragraph>
                        BLY(이하 ‘프로젝트 팀’)가 제공하는 서비스를 이용해 주셔서 감사합니다.
                        프로젝트 팀은 여러분이 프로젝트 팀이 제공하는 서비스(프로젝트 팀이 제공하는 서비스를
                        포괄하여 이하 “본 서비스”라 함)에 더 가깝고 편리하게 다가갈 수 있도록 ‘BLY 서비스약관’(이하
                        ‘본 약관’)을 마련하였습니다. 여러분은 본 약관에 동의함으로써 본 서비스에 가입하여 이용할 수
                        있습니다. 본 약관은 여러분이 본 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및
                        절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.
                    </Typography>
                </Paper>
                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    제 2 조 약관의 효력 및 변경
                    </Typography>
                    <Typography paragraph>
                    ① 본 약관의 내용은 본 서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한
                    여러분 모두에게 그 효력이 발생합니다.
                    </Typography>
                    <Typography paragraph>
                    ② 프로젝트 팀은 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다.
                    본 약관이 변경되는 경우 프로젝트 팀은 변경사항을 시행일자 15일 전부터 여러분에게 서비스 내
                    게시판 등을 통하여 공지 또는 통지하는 것을 원칙으로 하며, 피치 못하게 여러분에게 불리한 내용으로
                    변경할 경우에는 그 시행일자 30일 전부터 회원가입 시 등록된 이메일 주소로 이메일을 발송하여 개별적으로
                    알려 드리겠습니다.
                    </Typography>
                    <Typography paragraph>
                    ③ 프로젝트 팀이 전 항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지
                    거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 여러분의 의사표시가
                    없는 경우에는 변경된 약관을 승인한 것으로 봅니다.
                    </Typography>
                    <Typography paragraph>
                    ④ 여러분은 변경된 약관에 대하여 거부의사를 표시함으로써 이용계약의 해지를 선택할 수 있습니다.
                    </Typography>
                    <Typography paragraph>
                    ⑤ 본 약관은 여러분이 본 약관에 동의한 날로부터 본 약관 제13조에 따른 이용계약의 해지 시까지 적용하는 것을
                    원칙으로 합니다. 단, 본 약관의 일부 조항은 이용계약의 해지 후에도 유효하게 적용될 수 있습니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    제 3 조 약관 외 준칙
                    </Typography>
                    <Typography paragraph>
                    본 약관에 규정되지 않은 사항에 대해서는 관련 법령 또는 서비스의 운영정책 및 규칙, BLY 운영정책 및 규칙 등
                    (이하 총칭하여 ‘세부지침’)의 규정에 따릅니다. 또한 본 약관과 세부지침의 내용이 충돌할 경우 세부지침에 따릅니다.
                    </Typography>
                </Paper>

                <Typography variant="h4" sx={{ marginTop: 10, marginBottom: 4 }}>
                제 2 장 서비스 이용계약
                </Typography>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                    제 4 조 계약의 성립
                    </Typography>
                    <Typography paragraph>
                    ① 본 서비스에 가입하기 위해서는 이메일이 필요합니다. 이메일이 없으신 경우 이메일을 먼저 생성하시기 바랍니다.
                    </Typography>
                    <Typography paragraph>
                    ② 본 서비스 이용계약은 여러분이 본 약관의 내용에 동의함으로써 체결됩니다.
                    </Typography>
                </Paper>
                
                <Paper sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 5 조 본 서비스 가입의 제한
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ① 제4조에 따른 가입 신청자에게 프로젝트 팀은 원칙적으로 본 서비스 가입을 승낙합니다. 다만, 프로젝트 팀은 아래 각 호의 경우에는 그 사유가 해소될 때까지 승낙을 유보하거나 승낙하지 않을 수 있습니다.
                    </Typography>
                    <List>
                        <ListItem>1. 여러분이 다른 사람의 명의나 이메일 주소 등 개인정보를 이용하여 본 서비스에 가입하려고 한 경우</ListItem>
                        <ListItem>2. 본 서비스 제공 설비 용량에 현실적인 여유가 없는 경우</ListItem>
                        <ListItem>3. 본 서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우</ListItem>
                        <ListItem>4. 기타 프로젝트 팀이 재정적, 기술적으로 필요하다고 인정하는 경우</ListItem>
                        <ListItem>5. 프로젝트 팀로부터 본 서비스 이용정지 조치 등을 받은 자가 그 조치기간에 본 서비스 이용계약을 임의로 해지하고 재가입을 신청하는 경우</ListItem>
                        <ListItem>6. 기타 관련 법령에 위배되거나 세부지침 등 프로젝트 팀이 정한 기준에 반하는 경우</ListItem>
                    </List>
                    <Typography variant="body1" paragraph>
                        ② 만약, 여러분이 위 조건에 위반하여 본 서비스에 가입한 것으로 판명된 때에는 프로젝트 팀은 즉시 여러분의 본 서비스 이용을 정지시키거나 사용자계정을 삭제하는 등 적절한 제한을 할 수 있습니다.
                    </Typography>
                </Paper>

                <Typography variant="h4" gutterBottom sx={{ marginTop: 10, marginBottom: 4 }}>
                    제 3 장 서비스 이용
                </Typography>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 6 조 서비스의 제공
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ① 본 서비스 이용계약이 성립되면 여러분은 본 서비스를 서비스를 여러분이 원하는 때에 자유롭게 이용할 수 있고, 개별 서비스에 대한 별도의 이용계약을 체결할 필요는 없습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ② 본 서비스 내에서도 필요한 경우에 본 서비스 내에서도 필요한 경우에 별도의 이용약관에 동의해야 이용이 가능하며 필요한 추가 정보를 기재하거나, 이메일 주소 승인 또는 문자메시지 인증 등 프로젝트 팀이 정한 인증 절차를 완료하여야 서비스 이용이 가능합니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ③ 여러분은 본 서비스 가입 후여러분은 본 서비스 가입 후에도 언제든지 본 서비스의 이용을 종료할 수 있으며, 이 경우 관련 법령에서 정하는 바에 따라 일정기간 보관해야 하는 정보를 제외하고는 해당 서비스 이용기록, 여러분이 작성한 게시물 등 모든 데이터는 즉시 삭제 처리됩니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ④ 개별 또는 세부 하위 서비스의 이용 종료는 해당 개별 서비스 또는 세부 하위 서비스의 이용 종료만을 의미하며, 본 서비스를 구성하는 다른 서비스의 이용이 종료되지는 않습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ⑤ 프로젝트 팀은 여러분에게 고객센터 게시판, 농수산축산물 데이터 조회, 즐겨찾기 서비스를 제공합니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ⑥ 프로젝트 팀은 더 나은 본 서비스를 위하여 이에 필요한 웹 사이트의 업데이트를 진행할 수 있습니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 7 조 본 서비스의 변경 및 종료
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ① 프로젝트 팀은 본 서비스를 365일, 24시간 쉬지 않고 제공하기 위하여 최선의 노력을 다합니다. 다만, 아래 각 호의 경우 본 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>1. 본 서비스용 설비의 유지·보수 등을 위한 정기 또는 임시 점검의 경우</Typography>
                    <Typography variant="body1" paragraph>2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 본 서비스 이용에 지장이 있는 경우</Typography>
                    <Typography variant="body1" paragraph>3. 관계사와의 계약 종료, 정부의 명령/규제, 서비스/회원 정책 변경 등 프로젝트 팀의 제반 사정으로 본 서비스의 전부 또는 일부를 유지할 수 없는 경우</Typography>
                    <Typography variant="body1" paragraph>4. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</Typography>
                    <Typography variant="body1" paragraph>
                        ② 전항에 의한 본 서비스 중단의 경우에는 미리 제17조에서 정한 방법으로 여러분에게 통지 내지 공지하겠습니다. 이 때 원만한 서비스 및 정책 변경 등을 위하여 서비스 이용 시 재로그인 또는 추가적인 동의 절차 등이 필요할 수 있습니다. 다만, 프로젝트 팀로서도 예측할 수 없거나 통제할 수 없는 사유(프로젝트 팀의 과실이 없는 디스크 내지 서버 장애, 시스템 다운 등)로 인해 사전 통지 내지 공지가 불가능한 경우에는 그러하지 아니합니다. 이러한 경우에도 프로젝트 팀은 상황을 파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하도록 노력하고, 2시간 이상 복구가 지연되는 경우 서비스 공지사항, 카카오 고객센터 공지사항 등에 게시하여 알려 드리겠습니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 8 조 게시물의 관리
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ① 여러분의 게시물이 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’)및 저작권법 등 관련 법령에 위반되는 내용을 포함하는 경우, 권리자는 프로젝트 팀에 관련 법령이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 프로젝트 팀은 관련 법령에 따라 조치를 취합니다.
                    </Typography>
                    <Typography variant="body1" paragraph>② 프로젝트 팀은 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 프로젝트 팀의 정책 및 관련 법령에 위반되는 경우에는 관련 법령에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.</Typography>
                    <Typography variant="body1" paragraph>③ 위와 관련된 세부 절차는 정보통신망법 및 저작권법이 규정한 범위 내에서 프로젝트 팀이 정한 권리침해 신고 절차에 따릅니다.</Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 9 조 권리의 귀속 및 저작물의 이용
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ① 여러분은 사진, 글, 정보, (동)영상, 본 서비스 또는 프로젝트 팀에 대한 의견이나 제안 등 콘텐츠(이하 ‘게시물’)를 본 서비스 내에 게시할 수 있으며, 이러한 게시물에 대한 저작권을 포함한 지적재산권은 당연히 권리자가 계속하여 보유합니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ② 여러분은 본 서비스 내에 게시한 게시물에 대한 사용, 저장, 수정, 복제, 공중송신, 전시, 배포 등의 방식으로 이용할 수 있도록 사용을 허락하는 전 세계적인 라이선스를 프로젝트 팀에게 제공하게 됩니다. 본 라이선스에서 여러분이 프로젝트 팀에게 부여하는 권리는 본 서비스를 운영, 개선, 홍보하고 새로운 서비스를 개발하기 위한 범위 내에서 사용되며, 이러한 목적 범위 내에서 프로젝트 팀와 명시적인 업무계약을 체결한 상대방 또는 다른 이용자에 대한 서브라이선스 또한 여기에 포함됩니다. 또한, 본 서비스의 개선 및 연구개발 목적으로 프로젝트 팀 및 프로젝트 팀의 계열사에서 게시물을 사용할 수 있습니다. 일부 개별 서비스에서는 여러분이 제공한 콘텐츠에 접근하거나 이를 삭제하는 방법을 제공할 수 있습니다(다만 일부 서비스의 특성 및 콘텐츠의 성질 등에 따라 게시물의 삭제가 불가능할 수도 있습니다). 또한 일부 서비스에서는 제공된 콘텐츠에 대한 프로젝트 팀의 사용 범위를 제한하는 설정이 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>③ 여러분은 프로젝트 팀에 제공한 콘텐츠에 대해 프로젝트 팀에 라이선스를 부여하기 위해 필요한 권리를 보유해야 합니다. 이러한 권리를 보유하지 않아 발생하는 모든 문제에 대해서는 게시자가 책임을 부담하게 됩니다. 또한, 여러분은 음란하거나 폭력적이거나 기타 공서양속 및 법령에 위반하는 콘텐츠를 공개 또는 게시할 수 없습니다.</Typography>
                    <Typography variant="body1" paragraph>
                        ④ 프로젝트 팀은 여러분의 콘텐츠가 관련 법령에 위반되거나 음란 또는 청소년에게 유해한 게시물, 차별 갈등을 조장하는 게시물, 도배 · 광고 · 홍보 · 스팸성 게시물, 계정을 양도 또는 거래하는 내용의 게시물, 타인을 사칭하는 게시물 등이라고 판단되는 경우 이를 삭제하거나 게시를 거부할 수 있습니다. 다만 프로젝트 팀이 모든 콘텐츠를 검토할 의무가 있는 것은 아닙니다. 누군가 여러분의 권리를 침해하였다면, 고객센터를 통해 게시중단 요청에 대한 도움을 받으실 수 있습니다. 위와 관련된 구체적인 기준 및 이용제한 절차의 내용은 카카오 운영정책에서 확인하실 수 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ⑤ 본 서비스에서는 프로젝트 팀이 보유하지 않은 일부 콘텐츠가 표시될 수 있습니다. 그러한 콘텐츠에 대해서는 콘텐츠를 제공한 주체가 단독으로 모든 책임을 부담하게 됩니다. 여러분이 본 서비스를 이용하더라도 다른 이용자의 콘텐츠에 대하여 어떠한 권리를 가지게 되는 것은 아닙니다. 여러분이 다른 이용자의 콘텐츠를 사용하기 위해서는 콘텐츠 소유자로부터 별도로 허락을 받아야 합니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 8 조 본 서비스 이용 방법 및 주의점
                    </Typography>
                    
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ① 여러분은 본 서비스를 자유롭게 이용할 수 있으나, 아래 각 호의 행위는 하여서는 안 됩니다.
                    </Typography>
                    
                    <Box sx={{ paddingLeft: 2 }}>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        1. 이용 신청 또는 변경 시 허위 사실을 기재하거나, 다른 사람의 사용자계정 및 비밀번호를 도용, 부정하게 사용하거나, 다른 사람의 명의를 사용하거나 명의자의 허락 없이 이메일 인증 등을 수행하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        2. 프로젝트 팀의 서비스 정보를 이용하여 얻은 정보를 프로젝트 팀의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        3. 서비스 내에서 다운로드 또는 스트리밍을 통해 제공받은 음원을 사적 목적으로 이용하는 것 외에, 공공장소 및 영리를 목적으로 하는 영업장, 매장 등에서 재생하는 등의 방법으로 이용하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        4. 타인의 명예를 손상시키거나 불이익을 주는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        5. 게시판 등에 음란물을 게재하거나 음란사이트를 연결(링크)하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        6. 프로젝트 팀 또는 제3자의 저작권 등 기타 권리를 침해하는 행위(국내외 제3자의 저작권 등을 침해하는 행위로서 프로젝트 팀이 IP 접속 차단 등 기술적인 조치를 통하여 타인에 대한 권리 침해 방지 조치를 취하였음에도 불구하고 이용자가 프로젝트 팀를 기망하는 수단과 방법 등을 통하여 서비스에 접속 하는 등 제3자의 저작권 등을 침해하는 행위를 포함합니다)
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        7. 서비스 내에 프로젝트 팀나 제3자 등에 대한 허위의 사실을 게시하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        8. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성 등을 타인에게 유포하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        9. 본 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        10. 본 서비스의 운영을 방해하거나 안정적 운영을 방해할 수 있는 정보 및 수신자의 명시적인 수신거부의사에 반하여 또는 수신자의 명시적인 동의 없이 광고성 정보 또는 스팸메일(Spam Mail)을 전송하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        11. 프로젝트 팀의 동의 없이 서비스의 전체 또는 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위와 서비스를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        12. 타인으로 가장하는 행위 및 타인과의 관계를 허위로 명시하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        13. 다른 이용자의 개인정보를 수집, 저장, 공개하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        14. 자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가하는 등 피해를 입힐 목적으로 허위의 정보를 유통시키는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        15. 재물을 걸고 도박하거나 사행행위를 하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        16. 윤락행위를 알선하거나 음행을 매개하는 내용의 정보를 유통시키는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        17. 수치심이나 혐오감 또는 공포심을 일으키는 말이나 음향, 글이나 화상 또는 영상을 계속하여 상대방에게 도달하게 하여 상대방의 일상적 생활을 방해하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        18. 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 포함)의 전송 또는 게시 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        19. 프로젝트 팀 또는 관계사의 직원이나 운영자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 E-mail 등을 발송하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        20. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 가능성이 있는 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 E-mail 등으로 발송하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        21. 스토킹(stalking), 허위 또는 악의적 신고 남용 등 다른 이용자를 괴롭히는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        22. 1개월 이내 본 서비스 가입 및 유료서비스 구매 후 다시 해지하는 행위를 2회 이상 반복하는 등 본 서비스를 부당하게 악용하는 행위
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        23. 기타 현행 법령, 본 약관 및 운영정책 등 프로젝트 팀이 제공하는 서비스 관련 세부지침을 위반하는 행위
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ② 여러분은 서비스의 이용 권한, 기타 이용계약상 지위를 타인에게 양도·증여할 수 없으며, 담보로 제공할 수 없습니다.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ③ 여러분의 자격 혹은 나이에 따라 아래 각 호처럼 본 서비스 이용의 일부가 제한될 수 있습니다.
                    </Typography>
                    <Box sx={{ paddingLeft: 2 }}>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            1. 만19세 미만의 이용자는(단, 만 19세에 도달하는 해의 1월 1일을 맞이한 자는 제외, 이하 본 조에서 동일함) 정보통신망법 및 청소년보호법의 규정에 의하여 청소년유해매체물은 이용할 수 없습니다.
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            2. 청소년유해매체물을 이용하시기 위해서는 만 19세 이상이어야 하며, 정보통신망법 및 청소년보호법의 규정에 의하여 실명인증을 통해 본인 및 연령 인증을 받으셔야 합니다. 인증을 받지 않으시면, 해당 서비스의 이용이 제한됩니다.
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                            3. 만 19세 미만의 이용자의 서비스에 대하여 법정대리인의 요청 및 만19세 미만 이용자 본인의 동의가 있는 경우 세부 하위 서비스의 전체 또는 일부의 이용이 일정기간 제한됩니다.
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ④ 프로젝트 팀은 음성대화 기능 등을 제공하는 일부 서비스 내에서 이용자간 신고가 있는 경우, 신고된 이용자의 음성정보를 저장 및 보관할 수 있으며 이 정보는 프로젝트 팀만 보유합니다. 프로젝트 팀은 이용자간 분쟁 조정, 민원 처리를 위한 목적에 한하여, 제 3 자는 법령에 따라 권한이 부여된 경우에 한하여 이 정보를 열람할 수 있습니다. 프로젝트 팀은 부정이용 방지 및 관리의 목적에 따라 신고 접수시부터 3년간 해당 정보를 3년간 보관 후 파기합니다. 단, 저 사양 단말기의 경우에는 신고된 음성정보가 저장되지 않을 수 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ⑤ 혹시라도 여러분이 관련 법령, 프로젝트 팀의 모든 약관 또는 정책을 준수하지 않는다면, 프로젝트 팀은 여러분의 위반행위 등을 조사할 수 있고, 해당 게시물 등을 삭제 또는 임시 삭제하거나 여러분의 계정・본 서비스 전체 또는 본 서비스를 구성하는 일부 개별 서비스의 이용을 잠시 또는 계속하여 중단하거나, 본 서비스 재가입 또는 일부 개별 서비스의 재이용에 제한을 둘 수도 있습니다. 또한 여러분이 본 서비스와 관련된 설비의 오작동이나 시스템의 파괴 및 혼란을 유발하는 등 본 서비스 제공에 악영향을 미치거나 안정적 운영을 심각하게 방해한 경우, 프로젝트 팀은 이러한 위험 활동이 확인된 여러분의 계정들에 대하여 이용제한을 할 수 있습니다. 다만, 여러분은 이용제한과 관련하여 조치 결과가 불만족스러울 경우 고객센터를 통해 이의를 제기할 수 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ⑥ 이용 제한은 위반 활동의 누적 정도에 따라 한시적 제한에서 영구적 제한으로 단계적 제한하는 것을 원칙으로 하지만, 음란한 내용의 게시와 유포 및 사행성 도박 홍보 등 관련 법령에서 금지하는 명백한 불법행위나 타인의 권리침해로서 긴급한 위험 또는 피해 차단이 요구되는 사안에 대해서는 위반 활동 횟수의 누적 정도와 관계 없이 즉시 영구적으로 이용이 제한될 수 있습니다.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        ⑦ 본 조에서 정한 사항 및 그 밖에 본 서비스의 이용에 관한 자세한 사항은 BLY 운영정책 등을 참고해 주시기 바랍니다.
                    </Typography>

                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 9 조 이용계약 해지
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ① 여러분이 사용자계정 탈퇴를 하는 경우 본 서비스 이용계약도 자동으로 해지됩니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ② 본 서비스 이용계약 해지를 원하는 경우 여러분은 언제든지 서비스 내 제공되는 메뉴를 이용하여 해지 신청을 할 수 있으며, 프로젝트 팀은 법령이 정하는 바에 따라 신속히 처리하겠습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ③ 본 서비스 이용계약이 해지되면 관련 법령 및 카카오 개인정보 처리방침에 따라 여러분의 일정 정보를 보유하는 경우를 제외하고는 여러분의 정보나 여러분이 작성한 게시물 등 모든 데이터는 삭제됩니다. 다만, 여러분이 작성한 게시물이 제3자에 의하여 스크랩 또는 다른 공유 기능으로 게시되거나, 여러분이 제3자의 게시물에 댓글 등 게시물을 추가하는 등의 경우에는 해당 게시물 및 댓글은 삭제되지 않으므로 반드시 해지 신청 전에 삭제하시기 바랍니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ④ 전항에 따라 여러분이 삭제하지 않은 게시물은 다른 이용자의 정상적 서비스 이용을 위하여 필요한 범위 내에서 본 서비스 내에 삭제되지 않고 남아 있게 됩니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ⑤ 본 서비스를 구성하는 일부 개별 서비스의 경우 일정기간 동안 해당 개별 서비스를 이용하지 않을 경우 여러분의 정보를 파기하거나 분리 보관할 수 있으며, 또는 해당 개별 서비스 기능의 일부 또는 전부를 이용할 수 없도록 제한할 수 있습니다. 자세한 사항은 개별 서비스의 세부지침에서 확인하실 수 있습니다.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        ⑥ 본 서비스 이용계약이 해지된 경우라도 여러분은 다시 프로젝트 팀에 대하여 이용계약의 체결을 신청할 수 있습니다. 다만, 여러분이 관련 법령, 본 약관 및 세부지침을 준수하지 않아 서비스의 이용이 중단된 상태에서 이용계약을 해지한 후 다시 이용계약 체결을 신청하는 경우에는 본 서비스 가입에 일정기간 시간적 제한이 있을 수 있습니다. 또한 본 서비스를 구성하는 일부 개별 서비스의 경우 다시 본 서비스 이용계약을 체결한 후에도 해당 개별 서비스를 바로 이용하는 것에는 제6조 제3항에서 정한 바와 같이 일정한 시간적 제한 등이 따를 수 있습니다.
                    </Typography>
                </Paper>

                <Paper sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
                        제 10 조 개인정보의 보호
                    </Typography>
                    <Typography variant="body1" paragraph>
                        여러분의 개인정보의 안전한 처리는 프로젝트 팀에게 있어 가장 중요한 일 중 하나입니다. 여러분의 개인정보는 본 서비스의 원활한 제공을 위하여 여러분이 동의한 목적과 범위 내에서만 이용됩니다. 관련 법령에 의하거나 여러분이 별도로 동의하지 아니하는 한 프로젝트 팀이 여러분의 개인정보를 제3자에게 제공하는 일은 결코 없으므로, 안심하셔도 좋습니다. 프로젝트 팀이 여러분의 개인정보를 안전하게 처리하기 위하여 기울이는 노력이나 기타 자세한 사항은 카카오 개인정보처리방침을 참고하여 주십시오.
                    </Typography>
                </Paper>

            </Paper>
        </Container>
    );
};

export default TermsAndConditionsOfUsePage;