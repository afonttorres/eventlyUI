import React from "react";
import { Row, View } from "../../styles/styles.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMainCard } from "./ModuleHorizontalMainCard";
import { LinkButton } from "../buttons/LinkButton";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";
import { Wrapper, FeedCnt } from "./feed.styled.jsx";
import { ModuleVerticalMultiCard } from "./ModuleVerticalMultiCard";

export const HomeFeed = ({ events, tags, tag, setTag, eventsByTag, setEventsByTag, onlineEvents, offlineEvents, seeAll, setSeeAll, participations }) => {

    return (
        <View>
            <Wrapper>
                <Row height='5vh' justifyContent="flex-end">
                    {tag ?
                        <LinkButton callback={() => { setTag(); setEventsByTag(); setSeeAll(false) }} content={'Clear'} />
                        :
                        !seeAll ?
                            <LinkButton callback={() => { setSeeAll(true); setTag(); setEventsByTag() }} content={'See All'} /> :
                            <LinkButton callback={() => { setSeeAll(false); setTag(); setEventsByTag() }} content={'By type'} />}
                </Row>

                <ModuleTags tags={tags} callback={(data) => { setTag(data); setSeeAll(false) }} />

                <FeedCnt>
                    {!eventsByTag && !seeAll &&
                        <React.Fragment>
                            <ModuleHorizontalMainCard title={'Offline'} events={offlineEvents} />
                            <ModuleVerticalSmallCard title={'Online'} height={'30%'} events={onlineEvents} />
                        </React.Fragment>
                    }
                    {!seeAll && eventsByTag && <ModuleVerticalMainCard tag={tag} title={`${tag}`} events={eventsByTag} width={'var(--cardAllTags-width)'}/>}
                    {seeAll && !eventsByTag && <ModuleVerticalMainCard title={'All'} events={events} width={'var(--cardAllTags-width)'}/>}
                </FeedCnt>
            </Wrapper>
        </View >
    )
}